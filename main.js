$("body").on("click", ".dot:not(.active), .triangle-right:not(.active)", function (e) {
  e.preventDefault();

  const this_dot = e.target;

  const $this_dot = $(this_dot).closest(".dot, .triangle-right");

  $this_dot.addClass("active");
});

$("body").on("click", ".dot.active .close, .triangle-right.active .close", function (e) {
  e.preventDefault();

  const this_dot = e.target;

  console.log("hi!");

  const $this_dot = $(this_dot).closest(".dot, .triangle-right");

  $this_dot.removeClass("active");
  });

  //maca test//

  // $("body").on("click", ".triangle-right:not(.active)", function (e) {
  //   e.preventDefault();
  //
  //   const this_triangleright = e.target;
  //
  //   const $this_triangleright = $(this_triangleright).closest(".triangle-right");
  //
  //   $this_triangleright.addClass("active");
  // });
  //
  // $("body").on("click", ".triangle-right.active .close", function (e) {
  //   e.preventDefault();
  //
  //   const this_triangleright = e.target;
  //
  //   const $this_triangleright = $(this_triangleright).closest(".triangle-right");
  //
  //   $this_triangleright.removeClass("active");
  // });
