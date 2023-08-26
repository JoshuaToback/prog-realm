import React from "react";

function News() {
  const posts = [
    {
      id: 1,
      title: "Site Launch",
      date: '08/31/2023',
      content:
        "Welcome to the Site! We're really excited to have you here and follow along our card games!",
    },

    // Add more posts here...
  ];

  return (
    <div className="blog">
      <h1>Progression Realm News</h1>
      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <h3>{post.date}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
