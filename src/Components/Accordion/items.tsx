 interface Item {
    id: number;
    title: string;
    content: string;
  }



export const items: Item[] = [
    { 
        id: 1,
        title: 'What is Mibui?',
        content: 'Mibui is a platform that allows you to create and manage your own applications. You can create your own applications with a few clicks, and you can also manage your applications in the same way.'
    },
    {
        id: 2,
        title: 'How does Mibui work?',
        content: 'Mibui works by providing a user-friendly interface to build and customize applications. Users can choose from various components and features to tailor their applications according to their needs.',
      },
      {
        id: 3,
        title: 'Key Features of Mibui',
        content: 'Mibui offers a range of key features, including drag-and-drop functionality, real-time collaboration, and seamless integration with popular technologies. It aims to simplify the app development process for both beginners and experienced developers.',
      },
]