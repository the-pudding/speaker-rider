<script>
  import copy from "../data/copy.json";
</script>
  
<section id="intro">
    <h1>{copy.hed}</h1>
    {#each copy.intro as intro}
        <p>{@html intro.value}</p>
    {/each}
</section>
  
<style>
    #intro {
        max-width: 60rem;
        margin: 0 auto;
        padding: 0 0 4rem 0;
    }

    h1 {
        font-family: var(--serif-hed);
        font-size: 6em;
        line-height: 1;
        padding: 0 0 2rem 0;
        text-align: center;
    }

    p {
        font-family: var(--serif);
        font-size: 1.25rem; 
        line-height: 1.5;
        max-width: 40rem;
        margin: 0 auto; 
        padding: 1rem 0;
    }
</style>
  