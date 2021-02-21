let renderEntireTree = () => {
    console.log('State is')
}

let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Hi, How are you?", likesCount: 12 },
            { id: 2, message: "It's my first post.", likesCount: 11 },
            { id: 3, message: "Bla", likesCount: 11 },
            { id: 4, message: "blaaaa", likesCount: 11 },
        ],
        newPostText: 'it-kamasutra.com'
    },
    dialogsPage: {
        messages: [
            { id: 1, message: "Hi" },
            { id: 2, message: "How is your it-kamasutra?" },
            { id: 3, message: "Yo!" },
            { id: 4, message: "Yo!" },
            { id: 5, message: "Yo!" },
            { id: 6, message: "Hi" }
        ],
        dialogs: [
            { id: 1, name: "Dimych" },
            { id: 2, name: "Andrey" },
            { id: 3, name: "Sveta" },
            { id: 4, name: "Sasha" },
            { id: 5, name: "Viktor" },
            { id: 6, name: "Valera" }
        ]
    }
}

export const addPost = () => {
    //    debugger;
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state)
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    renderEntireTree(state)
}

export const subscribe = (observer) => {
    renderEntireTree = observer // наблюдатель
}

export default state
