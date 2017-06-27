import { Entry } from 'hero-cli/decorator';

@Entry({
  // path is optional
  path: '/dashboard/home.html',
  // template is optional
  template: './template.html'
})
export class DecoratePage {

}

document.write('Hello World!');
