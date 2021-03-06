const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let store = {
    _state: {
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
    },
    _callSubscriber() {
        console.log('State is')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer // наблюдатель
    },
    /*
        addPost() {
            //debugger;
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        },
        updateNewPostText(newText) {
            this._state.profilePage.newPostText = newText
            this._callSubscriber(this._state)
        },
    */
    dispatch(action) { // {type: 'ADD-POST'}
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }
    }



} // let store

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text });


export default store
window.state = store._state;
