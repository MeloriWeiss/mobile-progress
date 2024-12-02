class ProgressControl {
    value = 0;
    progressPie = document.getElementById('progress-pie');

    constructor() {
        this.init();
    }

    init() {
        const valueInput = document.getElementById('value-input');
        if (valueInput) {
            valueInput.addEventListener('change', (event) => {
                if (this.progressPie) {
                    this.progressPie.style.backgroundImage =
                        `conic-gradient(
                        gray ${360 / 100 * event.target.value}deg,
                        lightblue 0 ${360 - 360 / 100 * event.target.value}deg
                        )`
                }
            });
        }

        const animatedInput = document.getElementById('animated-input');
        if (animatedInput) {
            animatedInput.addEventListener('change', () => {
                this.progressPie.classList.toggle('animated');
            });
        }

        const hideInput = document.getElementById('hide-input');
        if (hideInput) {
            hideInput.addEventListener('change', (event) => {
                this.progressPie.style.display = event.target.checked ? 'none' : 'flex';
            });
        }
    }
}
window.onload = () => {
    (new ProgressControl());
}