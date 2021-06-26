import Review from "@/classes/Review.js";

const defaultState = () => ({
    list : [],
    page : 1,
    total : 0,
    size : 25,
});

export const state = () => defaultState();
  
export const mutations = {
    setReviews(state, reviews){
        state.list.splice(0, Infinity, ...reviews);
    },
    setTotal(state, total){
        state.total = total;
    },
    setPage(state, page){
        state.page = page;
    }
};

export const actions = {
    fetchReviews({ commit, state }, { page }){
        const params = { page, package_size : state.size};

        return this.$api.get("/reviews", { params })
            .then(response => response.data)
            .then(data => {
                commit("setTotal", data.total);
                commit("setPage", page);

                return data.rows;
            })
            .then(rawReviews => rawReviews.map(rawReview => {
                try {
                    return Review.createFromResponse(rawReview);
                } catch (error) {
                    return false;
                }
            }))
            .then(reviews => reviews.filter(review => !!review))
            .then(reviews => commit("setReviews", reviews));
    },
    createReview({}, { title, content, userName, rcaptchaToken }){
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", content);
        formData.append("user_name", userName);
        formData.append("rcaptcha_token", rcaptchaToken);

        return this.$api.post("/reviews", formData)
            .then(response => response.data);
    },
};  

export const getters = {
    list(state){
        return state.list;
    },
    total(state){
        return state.total;
    },
    size(state){
        return state.size;
    },
    page(state){
        return state.page;
    }
};