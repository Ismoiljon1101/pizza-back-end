console.log("Products frontend javascript file");

$(function () {
  $(".product-collection").on("change", () => {
    const selectedValue = $(".product-collection").val();

    if (selectedValue === "DRINK") {
      $("#product-size").hide();
      $("#product-volume").show();
    } else {
      $("#product-size").show();
      $("#product-volume").hide();
    }
  });

  $("#process-btn").on("click", () => {
    $(".dish-container").slideToggle(500);
    $("#process-btn").css("display", "none");
  });
  $("#cancel-btn").on("click", () => {
    $(".dish-container").slideToggle(100);
    $("#process-btn").css("display", "flex");
  });

  $(".new-product-status").on("change", async (e) => {
    const id = e.target.id;
    const productStatus = $(`#${id}.new-product-status`).val();
    console.log("id", id);
    console.log("status", productStatus);

    try {
      const response = await axios.post(`/admin/product/${id}`, {
        productStatus: productStatus,
      });
      const result = response.data;
      console.log("javobgarlik", result);
      if (result) {
        console.log("Product updated!");
        $(".new-product-status").blur();
      } else alert("Product update failed!");
    } catch (error) {
      console.log(err);
      alert("Update failed!");
    }
  });
});

const validateForm = () => {
  const productName = $(".product-name").val(),
   productPrice = $(".product-price").val(),
   productLeftCount = $(".product-left-count").val(),
   productCollection = $(".product-collection").val(),
   productDesc = $(".product-desc").val(),
   productStatus = $(".product-status").val();

  if (
    productName === "" ||
    productPrice === "" ||
    productLeftCount === "" ||
    productCollection === "" ||
    productDesc === "" ||
    productStatus === ""
  ) {
    alert("Please insert all details!");
    return false;
  }

  if (memberPassword !== confirmPassword) {
    alert("The password is different,  please check!");
    return false;
  }

  const memberImage = $(".member-image").get(0).files[0]
    ? $(".member-image").get(0).files[0]?.name
    : null;

  if (!memberImage) {
    alert("Please insert restaurant image");
    return false;
  }
};

function previewFileHendler(input, order) {
  const imgClassName = input.className;

  const file = $(`.${imgClassName}`).get(0).files[0];
  const fileType = file["type"];
  const validationType = ["image/jpg", "image/jpeg", "image/png"];

  if (!validationType.includes(fileType)) {
    alert("Only image/jpg, image/jpeg, image/png");
  } else {
    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        $(`#image-section-${order}`).attr("src", reader.result);
      };

      reader.readAsDataURL(file);
    }
  }
}
