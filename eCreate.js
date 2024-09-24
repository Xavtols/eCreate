document.querySelectorAll('.accordeon .contentBx .label').forEach(label => {
    label.addEventListener('click', () => {
        const contentBx = label.parentElement;
        contentBx.classList.toggle('active');
    });
  });
  
  
  window.onbeforeunload = () => {
      for(const form of document.getElementsByTagName('form')) {
        form.reset();
      }
    }
