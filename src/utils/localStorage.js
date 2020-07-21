export default {
    get(language) {
        return localStorage.getItem(language);
    },
    add(name, info) {
        localStorage.setItem(name, info);
    },
    remove(key) {
        localStorage.removeItem(key);
    },
};
