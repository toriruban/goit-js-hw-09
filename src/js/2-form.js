let formData = {
    email: "",
    message: ""
  };

  const formEl = document.querySelector('.feedback-form');

  const savedFormFunction = () => {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      formData = parsedData;

      formEl.elements.email.value = parsedData.email || "";
      formEl.elements.message.value = parsedData.message || "";
    }
  };
  
  savedFormFunction();
  
  formEl.addEventListener('input', event => {
    const target = event.target;
    const fieldName = target.name;
    const fieldValue = target.value.trim();
    
    formData[fieldName] = fieldValue;
  
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  });
  
  formEl.addEventListener('submit', event => {
    event.preventDefault();
    
    if (!formData.email || !formData.message) {
      alert("Fill please all fields");
      return;
    }
    
    console.log(formData);
    
    localStorage.removeItem('feedback-form-state');
    formData = { email: "", message: "" };
    formEl.reset();
  });
  