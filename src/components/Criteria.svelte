<script>
    import copy from "../data/copy.json";
</script>

<section id="criteria">
    <ol>
        {#each copy.criteria as criteria}
            <li>
                <span>{criteria.hed}</span>
                {@html criteria.text}
            </li>
        {/each}
    </ol>
</section>

<style>
    #criteria {
        max-width: 40rem;
        margin: 0 auto;
    }

    ol {
        font-family: var(--serif);
        font-size: 1.25rem; 
        line-height: 1.5;
    }

    ol li::marker {
        color: var(--on-orange);
        font-size: 3rem;
    }
    li {
        padding: 1rem 0 4rem 0;
        border-top: 1px solid var(--gray-light);
    }

    li span {
        font-family: var(--serif);
        font-weight: 700;
    }
</style>