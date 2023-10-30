$(function () {
    $('#deleter').sortable({
        connectWith:'.connectedSortable',
        receive:function(event,ui){
            ui.item.remove();
        }
    });
    
    var taskGroups = $("#task-container");
    $('#input-column').change(function () {
        var ulID = $(this).val();
        ulID = ulID.replace(/\s/g, '-');
        if (taskGroups.find('div').length < 5) {
            var input = $(this).val();
            taskGroups.append(`
                <div class="task-groups">
                    <h1 style="color:white">${input}</h1>
                    <ul id="${ulID}" class="connectedSortable">
                           
                    </ul>
                </div>
            `);
            $('#select-column').append($('<option>',{
                value: taskGroups.find('div').length,
                text: $(this).val()
            }));
            $(this).val('');
            taskGroups.find("ul").sortable({
                cursor: "move",
                connectWith: ".connectedSortable"
            });
        } else {
            console.log("daha fazla div koyamazsiniz");
            $(this).val('');
        }
    });


    $('#button-row').click(function(){
        var group = '#'+$('#select-column option:selected').text();
        console.log(group);
        var input = $('#input-row').val();
        $(group).append('<li>'+ input +'</li>');
        $('#input-row').val('');
    })

});