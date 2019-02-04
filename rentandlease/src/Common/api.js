import React, { PureComponent } from "react";
import { getDomain } from "./getDomain";

export const getApi = (url, type, onSuccess, onFailure) => {
  let domain = getDomain();
  let completeurl = domain + url;
  // onSuccess("true");
  onSuccess([
    {
      id: 1,
      location: "A",
      guests: "2",
      available: true,
      price: "10",
      description: "something",
      wifi: false,
      microwave: false,
      safeCloset: false
    },
    {
      id: 2,
      location: "B",
      guests: "2",
      available: true,
      price: "20",
      description: "some desc",
      wifi: false,
      microwave: false,
      safeCloset: false
    }
  ]);
  // fetch(completeurl, {
  //   method: "GET",
  //   mode: "cors", // no-cors, cors, *same-origin
  //   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  //   credentials: "same-origin", // include, *same-origin, omit
  //   headers: {
  //     "Content-Type": "application/json"
  //     // "Content-Type": "application/x-www-form-urlencoded",
  //   }
  // })
  //   .then(res => {
  //     if (res.ok) {
  //       return res.json();
  //     } else {
  //       throw console.error();
  //     }
  //   })
  //   .then(data => onSuccess(data))
  //   .catch(error => onFailure(error));
};

export const postApi = (url, onSuccess, onFailure, data = {}) => {
  let domain = getDomain();
  let completeurl = domain + url;
  console.log(data);
  console.log(onSuccess);
  onSuccess("Done");
  // onSuccess({
  //   isLoggedIn: true,
  //   firstName: "Ameya",
  //   lastName: "Angal",
  //   emailAddress: "aangal@iu.edu",
  //   contactNumber: "8122725134"
  // });
  //   fetch(completeurl, {
  //     method: "POST",
  //     mode: "cors", // no-cors, cors, *same-origin
  //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  //     credentials: "same-origin", // include, *same-origin, omit
  //     headers: {
  //       "Content-Type": "application/json"
  //       // "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //     body: JSON.stringify(data)
  //   }).then(res => {
  //       if(res.ok){
  //           return res.json()
  //       }
  //       else{
  //           throw
  //       }
  //   }).then(data => onSuccess(data)).catch(error => onFailure(error));
};
