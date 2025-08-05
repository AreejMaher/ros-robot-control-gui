<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    export let Pages ;
    export let activePage ;
</script>

<div class="tabs">
    <ul>
        {#each Pages as Page}
            <li on:click={() => dispatch('tabChange', Page)}>
                <div class:active ={Page === activePage} >{Page}</div>
            </li>
        {/each}
    </ul>
</div>

<style>
.tabs {
    margin-bottom: 50px;
}
ul{
    display: flex;
    justify-content: center;
    padding: 0;
    list-style-type: none;
}
li {
    margin : 0 20px ;
    font-size: 23px;
    color: #555;
    cursor: pointer;
}
.active {
    border-bottom: 2px solid rgb(154, 0, 0);
    color: #d91b42;
    padding-bottom: 8px;
}


</style>