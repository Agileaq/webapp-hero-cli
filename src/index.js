import { PATH as path } from './constant/index';
import request from './common/request';

document.write('<br>process.env = ' + JSON.stringify(process.env));
document.write('<br><br>URL = ' + path + '<br><br>');

window.onload = function(){

  document.getElementById('button').onclick = function () {

    request('/api/v2/user').then(function (user) {
      document.write(JSON.stringify(user.content.desc));
      setTimeout(function () {
        window.location.href = path + '/dashboard/home.html';
      }, 1000);
    }, function (error) {
      console.log('Server Error = ', error);
    });

  };

}
