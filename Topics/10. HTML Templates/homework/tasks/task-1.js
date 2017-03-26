/* globals $ */

function solve() {

    return function(selector) {

        var template =
            '<table class="items-table">' +
            '<thead>' +
            '<tr>' +
            '<th>#</th>' +
            '{{#headers}}' +
            '<th>{{this}}</th>' +
            '{{/headers}}' +
            '</tr>' +
            '</thead>' +
            '<tbody>' +
            '{{#items}}' +
            '<tr>' +
            '<td>{{@index}}</td>' +
            '<td>{{col1}}</td>' +
            '<td>{{col2}}</td>' +
            '<td>{{col3}}</td>' +
            '</tr>' +
            '{{/items}}' +
            '</tbody>' +
            '</table>';



        // '<table class="items-table">' +
        // '<thead>' +
        //   '<tr>' +
        //   '<th>#</th>' +
        //   '{{#headers}}' +
        //     '<th>{{this}}</th>' +
        //   '{{/headers}}' +
        //   '</tr>' +
        // '</thead>' +
        // '<tbody>' +
        //   '{{#items}}' +
        //     '<tr>' +
        //       '<td>{{@index}}</td>' +
        //       '<td>{{col1}}</td>' +
        //       '<td>{{col2}}</td>' +
        //       '<td>{{col3}}</td>' +
        //     '</tr>' +
        //   '{{/items}}' +
        // '</tbody>' +
        // '</table>'; 

        // data = {        
        //   headers : ['Vendor', 'Model', 'OS'],          
        //   items : [{          
        //     col1: 'Nokia',            
        //     col2: 'Lumia 920',            
        //     col3: 'Windows Phone'                      
        //   }, {          
        //     col1: 'LG',            
        //     col2: 'Nexus 5',            
        //     col3: 'Android'                      
        //   }, {          
        //     col1: 'Apple',            
        //     col2: 'iPhone 6',                        
        //     col3: 'iOS'                      
        //   }]          
        // };

        /*<table class="items-table"> 
  <thead>
    <tr>
      <th>#</th>
      <th>Vendor</th>
      <th>Model</th>
      <th>OS</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>0</td>
      <td>Nokia</td> 
      <td>Limia 920</td>
      <td>Windows Phone</td>
    </tr>
    <tr>
      <td>1</td> 
      <td>LG</td>
      <td>Nexus 5</td> 
      <td>Android</td> 
    </tr>
    <tr>
      <td>2</td> 
      <td>Apple</td>
      <td>iPhone 6</td> 
      <td>iOS</td> 
    </tr>
  </tbody>
</table>*/



        /* insert the template here as a string
            example:
            var template =
              '<ul>' +
                '{{#students}}' +
                '<li>' +
                  '{{name}}' +
                '</li>' +
                '{{/students}}' +
              '</ul>';
        */

        $(selector).html(template);
    };
};

module.exports = solve;