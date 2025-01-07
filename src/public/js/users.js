console.log("Users frontend javascript file");

$(
  $(".member-status").on("change", function (e) {
    const id = e.target.id;
    const status = e.target.value;

    axios
      .post(`/admin/user/edit`, {
        _id: id,
        memberStatus: status,
      })
      .then((result) => {
        console.log(result);
        $(e.target).blur();
      })
      .catch((err) => {
        console.log(err);
      });
  })
);
