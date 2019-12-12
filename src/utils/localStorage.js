export default {
    get(language) {
        return localStorage.getItem(language);
    },
    add(locale,language) {
       localStorage.setItem(locale,language);
    },
    remove(key){
        localStorage.removeItem(key);
      },
}