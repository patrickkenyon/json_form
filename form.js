document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault()
    var data = {}
    data.name = document.querySelector("[name=name]").value
    data.petName = document.querySelector("[name=petName]").value
    data.favColour = document.querySelector("[name=favColour]").value
    data.favCar = document.querySelector("[name=favCar]").value
    data.goldeneye = document.querySelector("[name=goldeneye]").value
    data.marketing = document.querySelector("[name=marketing]").value
    data.receiveEmails = document.querySelector(".radio1").checked
    data.email = document.querySelector("[name=email]").value
    data.age = document.querySelector("[name=age]").checked
    data.marioKart = document.querySelector("[name=marioKart]").checked
    var jsondata = JSON.stringify(data)

    var ajax = new XMLHttpRequest()
    ajax.open("POST", "post.php", true)
    ajax.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            var jsonresponse = JSON.parse(this.responseText)
            console.log(jsonresponse)
        }
    }
    ajax.setRequestHeader("Content-type", "application/json")
    ajax.send(jsondata)
})

