import { Entry } from 'hero-cli/decorator';

@Entry({
  path: '/dashboard/home.html'
})
export class DecoratePage {

}

document.write('Hello World!');
