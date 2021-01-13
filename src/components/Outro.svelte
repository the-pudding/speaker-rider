<script>
    import copy from "../data/copy.json";
    import wordmark from "../svg/pudding/wordmark.svg";
</script>

<section id="outro">
    {#each copy.outro as outro}
        <p>{@html outro.value}</p>
    {/each}
    <div class="acknowledgements">
        <div class="logos">
            <a href="https://opennews.org/"><img src="assets/images/open-news-2017.png" alt="Open News logo"></a>
            <a href="https://pudding.cool">{@html wordmark}</a>
        </div>
        {#each copy.acknowledgments as acknowledgments}
            <p>{@html acknowledgments.value}</p>
        {/each}
    </div>
</section>

<style>
    #outro {
        max-width: 40rem;
        margin: 0 auto;
    }

    p {
        font-family: var(--serif);
        font-size: 1.25rem; 
        line-height: 1.5;
        max-width: 40rem;
        margin: 0 auto; 
        padding: 1rem 0;
    }

    .acknowledgements p {
        font-family: var(--sans);
        color: var(--gray-dark);
        font-size: 1rem;
        text-align: center;
    }

    .logos {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 4rem 0 0 0;
    }

    .logos a {
        width: 12rem;
        padding: 0 1rem;
    }
</style>
    