<script>
    import { createEventDispatcher } from "svelte";

    let dispatch = createEventDispatcher();
    let mode = 'light';

    const toggleMode = () => {
        mode = mode === 'light' ? 'dark' : 'light';
        dispatch('SelectMode',mode)
    }
</script>

<div style="background: {mode === 'light' ? 'red' :  'rgb(235, 223, 223)'};">
<header class={mode}>
    <button on:click={toggleMode}> {mode === "light" ? "dark" : "Light"} Mode
    </button>
    <h1>
        
        {#if mode === "light"}
        <img src="/img/m_i_a_made_in_alex_cover.svg" alt="mia logo light mode" >
        {:else if mode === "dark"}
        <img src="/img/New Project.svg" alt="mia logo Dark mode">
        {/if}
    </h1>
</header>
</div>

<style>
    h1{
        text-align: center;
        height: 50px;
        /* color:; */
    }
    img {
        width: 200px;
        height: 50px;
    }
    header{
        margin: 0 ;
        padding: 20px;
        
    }
</style>