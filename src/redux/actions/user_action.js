import {
    SET_USER_NEW,
    SET_USER_LOGIN,
    SET_USER_LOGIN_CHECK,
    SET_USER_LOGIN_ADD,
    SET_USER_LOGOUT,
    SET_USER,               // Chat
    CLEAR_USER,             // Chat
    SET_PHOTO_URL,          // Chat
    SET_SEARCHWORD,         // 검색어
    SET_USER_SAVED_BOARDS,   // 커뮤니티 사용자 저장 글
    SET_USER_LIKED_COMMENTS,  // 커뮤니티 사용자 좋아요한 댓글
    SET_USER_LIKED_BOARDS,    // 커뮤니티 사용자 좋아요한 게시물
    SET_USER_DECLARE_DATA,    // 커뮤니티 사용자 신고한 데이터
    SET_NAME
} from './types';

export function setUserNew(userinfo) {
    return {
        type: SET_USER_NEW,
        payload: userinfo
    }
}

export function setUserLogin(userinfo) {
    return {
        type: SET_USER_LOGIN,
        payload: userinfo
    }
}

export function setUserLoginCheck(userinfo) {
    return {
        type: SET_USER_LOGIN_CHECK,
        payload: userinfo
    }
}

export function setUserLoginAdd(userinfo) {
    return {
        type: SET_USER_LOGIN_ADD,
        payload: userinfo
    }
}

export function setUserLogout() {
    return {
        type: SET_USER_LOGOUT
    }
}

export function setUser(user) {     // Chat : Firebase Object
    return {
        type: SET_USER,
        payload: user
    }
}

export function setName(displayName) {     // Chat : Firebase Object
    return {
        type: SET_NAME,
        payload: displayName
    }
}

export function clearUser() {       // Chat
    return {
        type: CLEAR_USER
    }
}

export function setPhotoURL(photoURL) {     // Chat
    return  {
        type: SET_PHOTO_URL,
        payload: photoURL
    }
}

export function setSearchWord(searchWord) {     // Chat
    return  {
        type: SET_SEARCHWORD,
        payload: searchWord
    }
}




export function setSavedBoards(savedBoards) {     // 커뮤니티
    return  {
        type: SET_USER_SAVED_BOARDS,
        payload: savedBoards
    }
}
export function setLikedComments(likedComments) {     // 커뮤니티
    return  {
        type: SET_USER_LIKED_COMMENTS,
        payload: likedComments
    }
}
export function setLikedBoards(likedBaords) {     // 커뮤니티
    return  {
        type: SET_USER_LIKED_BOARDS,
        payload: likedBaords
    }
}
export function setDeclareData(declaredata) {     // 커뮤니티
    return  {
        type: SET_USER_DECLARE_DATA,
        payload: declaredata
    }
}