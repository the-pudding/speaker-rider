<script>
  import copy from "../data/copy.json";
</script>
  
<section id="intro">
    <h1>{@html copy.hed}</h1>
    {#each copy.intro as intro}
        <p>{@html intro.value}</p>
    {/each}
</section>
  
<style>
    #intro {
        max-width: 60rem;
        margin: 0 auto;
        padding: 2rem 1rem 4rem 1rem;
    }

    h1 {
        font-family: var(--serif-hed);
        font-size: 5.5em;
        line-height: 1.05;
        padding: 0 0 2rem 0;
        text-align: center;
        font-weight: 700;
    }

    p {
        font-family: var(--serif);
        font-size: 1.25rem; 
        line-height: 1.5;
        max-width: 40rem;
        margin: 0 auto; 
        padding: 1rem 0;
    }

    @media only screen and (max-width: 800px) {
        h1 {
            font-size: 4.25rem;
            padding: 0 0 1.5rem 0;
        }
    }

    @media only screen and (max-width: 620px) {
        #intro {
            padding: 2rem 1rem 3rem 1rem;
        }
        h1 {
            font-size: 3.25rem;
            padding: 0 0 1rem 0;
        }
        p {
            font-size: 1rem;
        }
    }

    @media only screen and (max-width: 480px) {
        #intro {
            padding: 2rem 1rem 2rem 1rem;
        }
        h1 {
            font-size: 2.5rem;
            padding: 0 0 0.75rem 0;
        }
    }

    @media only screen and (max-width: 400px) {
        h1 {
            font-size: 2.25rem;
        }
    }
</style>
  