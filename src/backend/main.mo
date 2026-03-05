import Map "mo:core/Map";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Text "mo:core/Text";

actor {
  // Types
  type Book = {
    id : Nat;
    title : Text;
    description : Text;
    genre : Text;
    publishedYear : Nat;
    coverUrl : Text;
  };

  module Book {
    public func compare(book1 : Book, book2 : Book) : Order.Order {
      switch (Text.compare(book1.title, book2.title)) {
        case (#equal) { Nat.compare(book1.id, book2.id) };
        case (order) { order };
      };
    };
  };

  type BlogPost = {
    id : Nat;
    title : Text;
    body : Text;
    excerpt : Text;
    date : Text;
  };

  module BlogPost {
    public func compare(blogPost1 : BlogPost, blogPost2 : BlogPost) : Order.Order {
      switch (Text.compare(blogPost1.date, blogPost2.date)) {
        case (#equal) { Nat.compare(blogPost1.id, blogPost2.id) };
        case (order) { order };
      };
    };
  };

  type ContactMessage = {
    id : Nat;
    name : Text;
    email : Text;
    message : Text;
    timestamp : Int;
  };

  module ContactMessage {
    public func compareByNewestFirst(contactMessage1 : ContactMessage, contactMessage2 : ContactMessage) : Order.Order {
      Int.compare(contactMessage2.timestamp, contactMessage1.timestamp);
    };
  };

  // Storage
  var nextContactMessageId = 0;

  let books = Map.empty<Nat, Book>();
  let blogPosts = Map.empty<Nat, BlogPost>();
  let contactMessages = Map.empty<Nat, ContactMessage>();

  // Initialization
  public shared ({ caller }) func init() : async () {
    // Seed books
    let bookEntries = [
      (
        0,
        {
          id = 0;
          title = "The Infinite Loop";
          description = "A sci-fi novel about time travel and paradoxes.";
          genre = "Science Fiction";
          publishedYear = 2020;
          coverUrl = "/covers/infinite-loop.jpg";
        },
      ),
      (
        1,
        {
          id = 1;
          title = "Silent Echoes";
          description = "A mystery novel set in a quiet town with hidden secrets.";
          genre = "Mystery";
          publishedYear = 2018;
          coverUrl = "/covers/silent-echoes.jpg";
        },
      ),
      (
        2,
        {
          id = 2;
          title = "Whispers in the Wind";
          description = "A collection of poetry inspired by nature.";
          genre = "Poetry";
          publishedYear = 2021;
          coverUrl = "/covers/whispers-wind.jpg";
        },
      ),
    ];

    for ((id, book) in bookEntries.values()) {
      books.add(id, book);
    };

    // Seed blog posts
    let blogPostEntries = [
      (
        0,
        {
          id = 0;
          title = "Welcome to my Author Website";
          body = "This is the first blog post on my new website. Stay tuned for more updates!";
          excerpt = "Welcome to my Author Website - This is the first blog post on my new website.";
          date = "2022-01-01";
        },
      ),
      (
        1,
        {
          id = 1;
          title = "Behind the Scenes of 'The Infinite Loop'";
          body = "In this post, I share the inspiration and writing process behind my latest novel.";
          excerpt = "Behind the Scenes of 'The Infinite Loop' - Inspiration and writing process.";
          date = "2022-03-15";
        },
      ),
      (
        2,
        {
          id = 2;
          title = "Poetry and Nature";
          body = "Exploring the connection between poetry and the natural world.";
          excerpt = "Poetry and Nature - Exploring their connection.";
          date = "2022-05-20";
        },
      ),
    ];

    for ((id, blogPost) in blogPostEntries.values()) {
      blogPosts.add(id, blogPost);
    };
  };

  // Book Queries
  public query ({ caller }) func getBooks() : async [Book] {
    books.values().toArray().sort();
  };

  // Blog Post Queries
  public query ({ caller }) func getBlogPosts() : async [BlogPost] {
    blogPosts.values().toArray().sort();
  };

  // Contact Messages
  public shared ({ caller }) func submitContactMessage(name : Text, email : Text, message : Text) : async () {
    if (name == "" or message == "") {
      Runtime.trap("Name and message are required");
    };

    let newMessage : ContactMessage = {
      id = nextContactMessageId;
      name;
      email;
      message;
      timestamp = Time.now();
    };

    contactMessages.add(nextContactMessageId, newMessage);
    nextContactMessageId += 1;
  };

  public query ({ caller }) func getContactMessages() : async [ContactMessage] {
    contactMessages.values().toArray().sort(ContactMessage.compareByNewestFirst);
  };
};
