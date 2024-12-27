class ScrollHandler {
    static handleScroll(e, sectionId) {
      e.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
  
  export default ScrollHandler;