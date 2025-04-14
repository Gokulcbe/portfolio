import Button from "primevue/button"
import Menubar from 'primevue/menubar'; 
import InputText from 'primevue/inputtext';
import Avatar from 'primevue/avatar';
import logo from '../../assets/logo-dark.svg';

export default {
    name: 'MenuBar',
    data() {
        return {
            items: [
                { label: 'Home', icon: 'pi pi-home', command: () => this.scrollToSection('home') },
                { label: 'About', icon: 'pi pi-user', command: () => this.scrollToSection('about') },
                { label: 'Education', icon: 'pi pi-book', command: () => this.scrollToSection('education') },
                { label: 'Experience', icon: 'pi pi-briefcase', command: () => this.scrollToSection('experience') },
                { label: 'Contact', icon: 'pi pi-envelope', command: () => this.scrollToSection('contact') },
                { label: 'Blogs', icon: 'pi pi-envelope', command: () => this.scrollToSection('blogs') }
            ],
            isFixed: false
        }
    },
    components: {
        Button,
        Menubar,
        InputText,
        Avatar,
        logo
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.isFixed = window.scrollY >= 45;
        },
        scrollToSection(sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    }
}