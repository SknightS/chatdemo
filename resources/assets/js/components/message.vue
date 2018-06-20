<template>
    <div>
        <li class="list-group-item" :class="className"><slot></slot></li>
        <small class="badge badge-danger float-right">{{this.name}}</small>
    </div>

</template>

<script>
    export default {
        props:[
          'color',
          'name'
        ],
        computed:{
            className(){
                return 'list-group-item-'+this.color;
            }
        },
        mounted() {
            // console.log('Component mounted.')
        }
    }
</script>
