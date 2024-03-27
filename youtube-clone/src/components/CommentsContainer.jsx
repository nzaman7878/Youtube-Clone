

const commentsData = [
  {
    name: "Nuruzzman",
    text: "hey how are you all?",
    replies: [],
  },
  {
    name: "Ali jabed",
    text: "Chup kar aur code mein dyaan de",
    replies: [
      {
        name: "Misbha",
        text: "I love Himun and Surajit sir",
        replies: [],
      },
      {
        name: "Aynshu Dev",
        text: "Jhagda mat karu aur sharif bano sab",
        replies: [
          {
            name: "Manu",
            text: "I am the best hahahahah",
            replies: [
              {
                name: "Tanushree",
                text: "Good night everyone",
                replies: [
                  {
                    name: "Nabamita",
                    text: "Good Morning everyone",
                    replies: [
                      {
                        name: "Farzia Shaaj",
                        text: "College mein sirf Shaaji ko dekhne ke liye jaati hoon",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Mashud",
                    text: "Mere baaf police hai hahahaha",
                    replies: [],
                  },
                  {
                    name: "Akram",
                    text: "Mere bhai dubai me rahta hai",
                    replies: [],
                  },
                  {
                    name: "Gyashree",
                    text: "Ye senior akram mera piche padh gaya hai........",
                    replies: [],
                  },
                  {
                    name: "Juwel",
                    text: "Karimganj ka topper hoon mein",
                    replies: [],
                  },
                  {
                    name: "Adrita Juwel",
                    text: "Ladkiyon me kxj ka main topper hoon ",
                    replies: [],
                  },
            
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  // Disclaimer: Don't use indexes as keys
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;