const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const user = {
        name: formData.get('name'),
        race: formData.get('race'),
        hp: 100,
        gold: 0,
        completed: {},
    };
    const userStrignified = JSON.stringify(user);
    localStorage.setItem('USER', userStrignified);

    window.location = './map';
});