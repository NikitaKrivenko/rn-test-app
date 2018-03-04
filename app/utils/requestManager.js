import {StackOverflowQuestionsUrl} from './../constants/urls';

export default RequestManager = {
  getStackOverflowQuestions() {
    return fetch(StackOverflowQuestionsUrl)
      .then(response => Promise.all([response.ok, response.json()]))
      .then(([responseOk, responseJson]) => {
        if (responseOk) {
          return responseJson.items;
        } else {
          throw new Error(responseJson.error_message);
        }
      })
      .catch(error => {
        throw error;
      });
  }
}