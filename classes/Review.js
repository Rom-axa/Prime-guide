import moment from "moment";

export default class Review {
    #userName = null;
    #content = null;
    #title = null;
    #date = null;

    constructor(title, content, userName, date){
        this.#title = title;
        this.#content = content;
        this.#userName = userName;
        this.#date = date;
    }

    static createFromResponse(rawReviewData){
        const { title, content, user_name, created_at } = rawReviewData;

        if ([title, content, user_name, created_at].includes(undefined)) {
            throw new Error(`
                Missing required params
                expected (title, content, user_name, created_at)
                and received (${title}, ${content}, ${user_name}, ${created_at})
            `);
        }

        return new this(title, content, user_name, moment(created_at));
    }

    get title(){
        return this.#title;
    }

    get content(){
        return this.#content;
    }

    get userName(){
        return this.#userName;
    }

    get date(){
        return this.#date;
    }
}