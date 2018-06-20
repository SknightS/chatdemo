
<html lang="{{ app()->getLocale() }}">
<head>
    <meta name="csrf-token" content="{{csrf_token()}}">
    <script>Window.Laravel={csrfToken:'{{csrf_token()}}'}</script>
    <link rel="stylesheet" href="{{url('public/css/app.css')}}">
<title>Chat</title>

</head>
<body>

<div class="container">
    <div class="row" id="app">

        <h2>Chat</h2>

        <div class="col-md-4 offset-4">
            <li class="list-group-item active">Active item</li>
            <ul class="list-group" v-chat-scroll style="height: 400px; overflow-y:scroll ">
                <message-component
                            v-for="value in chat.message"
                            color="warning"
                            name="you"
                    >
                        @{{value.message}}
                </message-component>

            </ul>
            <input type="text" class="form-control" v-model="message" @keyup.enter="send" placeholder="type your message here">


        </div>


    </div>



</div>


<script src="{{url('public/js/app.js')}}"></script>

</body>

</html>