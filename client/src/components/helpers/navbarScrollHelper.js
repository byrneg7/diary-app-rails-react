const navBarScrollHelper = () => {
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    const authNav = document.getElementById("navbar")
    if (authNav && currentScrollPos > 65) {
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-65px";
      }
      prevScrollpos = currentScrollPos;
    }
  }
};

export default navBarScrollHelper;