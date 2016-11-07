define({ "api": [
  {
    "type": "post",
    "url": "/api/authenticate",
    "title": "Authenticate a Person",
    "name": "Authenticate_a_Person",
    "group": "Authentication",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Person's username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Person's password.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n     \t\"success\": true,\n     \t\"message\": \"Person authenticated with success.\",\n\t\t\t\"token\": \"eyJhbGciOiJIUzI1NiJ9.NTdmMmM1OTQyMjU4ZDk2NmIyZjlmNzZi.-0lMKT1pBzN-sV44e7C5QHyDQVa6hTxY7mYGXuBHfm8\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response: ",
          "content": " Error 422: Unprocessable Entity\n{\n    \"success\": false,\n    \"username\": \"Missing parameter: username.\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response: ",
          "content": " Error 401: Unauthorized\n{\n    \"success\": false,\n    \"password\": \"Incorrect password.\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/api.js",
    "groupTitle": "Authentication",
    "sampleRequest": [
      {
        "url": "http://localhost:4546/api/authenticate"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/newsletter/post/",
    "title": "Get all blog posts",
    "name": "Get_all_blog_posts",
    "group": "Blog_Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentication token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \t\"success\": true,\n \t\"posts\": [post object]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/newsletter/post.js",
    "groupTitle": "Blog_Post",
    "sampleRequest": [
      {
        "url": "http://localhost:4546/api/newsletter/post/"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/newsletter/post/:categoryId",
    "title": "Get all blog posts by category",
    "name": "Get_all_blog_posts_by_category",
    "group": "Blog_Post",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentication token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \t\"success\": true,\n \t\"posts\": [post object]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/newsletter/post.js",
    "groupTitle": "Blog_Post",
    "sampleRequest": [
      {
        "url": "http://localhost:4546/api/newsletter/post/:categoryId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/newsletter/category",
    "title": "Get all blog posts categories",
    "name": "Get_all_blog_posts_categories",
    "group": "Blog_Post_Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Authentication token.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n \t\"success\": true,\n \t\"categories\": [category object]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/newsletter/category.js",
    "groupTitle": "Blog_Post_Category",
    "sampleRequest": [
      {
        "url": "http://localhost:4546/api/newsletter/category"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/newsletter",
    "title": "Create a newsletter",
    "name": "Create_a_newsletter",
    "group": "Newsletter",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "x-access-token",
            "description": "<p>Access Token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>Newsletter's Content</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subject",
            "description": "<p>Newsletter's Subject</p>"
          },
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "emails",
            "description": "<p>Newsletter's emails to send to</p>"
          },
          {
            "group": "Parameter",
            "type": "JSON",
            "optional": false,
            "field": "groups",
            "description": "<p>Array of group Ids</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/newsletter/index.js",
    "groupTitle": "Newsletter",
    "sampleRequest": [
      {
        "url": "http://localhost:4546/api/newsletter"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/api/newsletter/:newsletterId",
    "title": "Delete a newsletter",
    "name": "Delete_a_newsletter",
    "group": "Newsletter",
    "version": "0.0.0",
    "filename": "routes/newsletter/index.js",
    "groupTitle": "Newsletter",
    "sampleRequest": [
      {
        "url": "http://localhost:4546/api/newsletter/:newsletterId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/newsletter/:newsletterId",
    "title": "Get a newsletter",
    "name": "Get_a_newsletter",
    "group": "Newsletter",
    "version": "0.0.0",
    "filename": "routes/newsletter/index.js",
    "groupTitle": "Newsletter",
    "sampleRequest": [
      {
        "url": "http://localhost:4546/api/newsletter/:newsletterId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/newsletters",
    "title": "Get all newsletters",
    "name": "Get_all_newsletters",
    "group": "Newsletter",
    "version": "0.0.0",
    "filename": "routes/newsletter/index.js",
    "groupTitle": "Newsletter",
    "sampleRequest": [
      {
        "url": "http://localhost:4546/api/newsletters"
      }
    ]
  },
  {
    "type": "put",
    "url": "/api/newsletter",
    "title": "Update a newsletter",
    "name": "Update_a_newsletter",
    "group": "Newsletter",
    "version": "0.0.0",
    "filename": "routes/newsletter/index.js",
    "groupTitle": "Newsletter",
    "sampleRequest": [
      {
        "url": "http://localhost:4546/api/newsletter"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/newsletter/:newsletterId/stats",
    "title": "Get a Newsletter Stats",
    "name": "Get_a_Newsletter_Stats",
    "group": "Newsletter_Stats",
    "version": "0.0.0",
    "filename": "routes/newsletter/stats.js",
    "groupTitle": "Newsletter_Stats",
    "sampleRequest": [
      {
        "url": "http://localhost:4546/api/newsletter/:newsletterId/stats"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/newsletter/subscribers/group/:groupId/subscriber",
    "title": "Add a subscriber to a group",
    "name": "Add_a_subscriber_to_a_group",
    "group": "Newsletter_Subscriber",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "name",
            "description": "<p>Subscriber's name</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "email",
            "description": "<p>Subscriber's email</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "token",
            "description": "<p>Authentication token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/newsletter/subscribers.js",
    "groupTitle": "Newsletter_Subscriber",
    "sampleRequest": [
      {
        "url": "http://localhost:4546/api/newsletter/subscribers/group/:groupId/subscriber"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/api/newsletter/subscribers/group/:groupId/:subscriberId",
    "title": "Delete a subscriber from a group",
    "name": "Delete_a_subscriber_from_a_group",
    "group": "Newsletter_Subscriber",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "token",
            "description": "<p>Access Token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/newsletter/subscribers.js",
    "groupTitle": "Newsletter_Subscriber",
    "sampleRequest": [
      {
        "url": "http://localhost:4546/api/newsletter/subscribers/group/:groupId/:subscriberId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/newsletter/group/:groupId/:subscriberId",
    "title": "Get a subscriber from a group",
    "name": "Get_a_subscriber_from_a_group",
    "group": "Newsletter_Subscriber",
    "version": "0.0.0",
    "filename": "routes/newsletter/subscribers.js",
    "groupTitle": "Newsletter_Subscriber",
    "sampleRequest": [
      {
        "url": "http://localhost:4546/api/newsletter/group/:groupId/:subscriberId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/newsletter/group/:groupId",
    "title": "Get a subscriber group",
    "name": "Get_a_subscriber_group",
    "group": "Newsletter_Subscriber",
    "version": "0.0.0",
    "filename": "routes/newsletter/subscribers.js",
    "groupTitle": "Newsletter_Subscriber",
    "sampleRequest": [
      {
        "url": "http://localhost:4546/api/newsletter/group/:groupId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/newsletter/group/:groupId/subscribers",
    "title": "Get all subscriber from a group",
    "name": "Get_all_subscriber_from_a_group",
    "group": "Newsletter_Subscriber",
    "version": "0.0.0",
    "filename": "routes/newsletter/subscribers.js",
    "groupTitle": "Newsletter_Subscriber",
    "sampleRequest": [
      {
        "url": "http://localhost:4546/api/newsletter/group/:groupId/subscribers"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/newsletter/group/:groupId/subscribers/import",
    "title": "Import subscriber to a group",
    "name": "Import_subscriber_to_a_group",
    "group": "Newsletter_Subscriber",
    "version": "0.0.0",
    "filename": "routes/newsletter/subscribers.js",
    "groupTitle": "Newsletter_Subscriber",
    "sampleRequest": [
      {
        "url": "http://localhost:4546/api/newsletter/group/:groupId/subscribers/import"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/newsletter/group/:groupId",
    "title": "Update a subscriber group",
    "name": "Update_a_subscriber_group",
    "group": "Newsletter_Subscriber",
    "version": "0.0.0",
    "filename": "routes/newsletter/subscribers.js",
    "groupTitle": "Newsletter_Subscriber",
    "sampleRequest": [
      {
        "url": "http://localhost:4546/api/newsletter/group/:groupId"
      }
    ]
  },
  {
    "type": "post",
    "url": "/api/newsletter/group",
    "title": "Add a subscriber group",
    "name": "Add_a_subscriber_group",
    "group": "Subscriber_Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "name",
            "description": "<p>Group Name</p>"
          },
          {
            "group": "Parameter",
            "optional": false,
            "field": "token",
            "description": "<p>Access Token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/newsletter/group.js",
    "groupTitle": "Subscriber_Group",
    "sampleRequest": [
      {
        "url": "http://localhost:4546/api/newsletter/group"
      }
    ]
  },
  {
    "type": "delete",
    "url": "/api/newsletter/group",
    "title": "Delete a subscriber group",
    "name": "Delete_a_subscriber_group",
    "group": "Subscriber_Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "token",
            "description": "<p>Access Token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/newsletter/group.js",
    "groupTitle": "Subscriber_Group",
    "sampleRequest": [
      {
        "url": "http://localhost:4546/api/newsletter/group"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/newsletter/group/:groupId/export",
    "title": "Export subscriber to a group",
    "name": "Export_subscriber_to_a_group",
    "group": "Subscriber_Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "token",
            "description": "<p>Access Token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/newsletter/group.js",
    "groupTitle": "Subscriber_Group",
    "sampleRequest": [
      {
        "url": "http://localhost:4546/api/newsletter/group/:groupId/export"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/newsletter/group/:groupId",
    "title": "Get a subscriber group",
    "name": "Get_a_subscriber_group",
    "group": "Subscriber_Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "token",
            "description": "<p>Access Token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/newsletter/group.js",
    "groupTitle": "Subscriber_Group",
    "sampleRequest": [
      {
        "url": "http://localhost:4546/api/newsletter/group/:groupId"
      }
    ]
  },
  {
    "type": "get",
    "url": "/api/newsletter/group",
    "title": "Get all subscriber groups",
    "name": "Get_all_subscriber_groups",
    "group": "Subscriber_Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "token",
            "description": "<p>Access Token</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/newsletter/group.js",
    "groupTitle": "Subscriber_Group",
    "sampleRequest": [
      {
        "url": "http://localhost:4546/api/newsletter/group"
      }
    ]
  }
] });
