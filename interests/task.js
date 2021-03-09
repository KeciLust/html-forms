    document.addEventListener(`change`, (e) => {
        let check = e.target;
        const child = Array.from(check.closest(`li`).querySelectorAll(`input`));
        child.forEach(el => el.checked = check.checked);
        while(check){
        const parent = check.closest(`ul`).parentNode.querySelector(`input`);
        const sibling = Array.from(parent.closest(`li`).querySelector(`ul`).querySelectorAll(`input`));
        const status = sibling.map(el => el.checked);
        const every = status.every(Boolean);
        const some = status.some(Boolean);
        parent.checked = every;
        parent.indeterminate = !every && every !== some;   
        check = check != parent ? parent : 0 ;
    }    
               
    })
        
        

