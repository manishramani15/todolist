$(() => {

    function appendList(data) {
        $('#taskInput').val('')
        $('#toDoList').empty()
        data.forEach((todo) => {
            $('#toDoList').append($('<li>').text(todo))
        })
    }
    $.get(
        '/todos',
        (data) => {
            appendList(data)
        }
    )

    $('#list-form').submit((ev) => {
        ev.preventDefault()
        $.post(
            '/todos',
            {todo: $('#taskInput').val()},
            (data) => {
                appendList(data)
            }
        )
    })
})