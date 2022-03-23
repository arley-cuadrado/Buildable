
const inputFocus = document.getElementById('inputFocus');
const btn = document.getElementById('btn')
const results = document.getElementById('results')

async function onkey(){

    const url = 'https://api.buildable.dev/trigger/v2/test-0d6d4ffa-777e-44c9-bb69-b9b8dd5da59f?search='

    await fetch( url )
    .then( Response => Response.json() )
    .then( data => {
        function testFunction(){
        
            for( var i = 0; i < data.rows.length; i++ ){
                console.log(data.rows[i].title)
                results.innerText += `
                    ${data.rows[i].title}
            
                `
            }
        }

        
        testFunction()
            
        })
    .catch( err => console.log(err) )


}
