<script>
    import copy from "../data/copy.json";
</script>

<section id="criteria">
    <ol>
        {#each copy.criteria as criteria}
            <li>
                <span class="spacing">
                    <span class="hed">{criteria.hed}</span>
                    {@html criteria.text}
                </span>
            </li>
        {/each}
    </ol>
</section>

<style>
    #criteria {
        max-width: 42rem;
        margin: 0 auto;
        padding: 0 1rem;
    }

    ol {
        font-family: var(--serif);
        font-size: 1.25rem; 
        line-height: 1.5;
        list-style-type: none;
        counter-reset: item;
    }

    ol li::before {
        color: var(--on-orange);
        font-size: 3rem;
        position: absolute;
        left: -4.5rem;
        top: 0.25rem;
        width: 4rem;
        text-align: right;
        display: block;
        line-height: 1.5;
        font-weight: 700;
        content: counter(item) "";
    }
    li {
        counter-increment: item;
        padding: 1rem 0 3rem 0;
        position: relative;
        border-top: 1px solid var(--gray-light);
    }

    .hed {
        font-family: var(--serif);
        font-weight: 700;
    }

    @media only screen and (max-width: 800px) {
       ol {
           padding: 0 1rem 0 3.5rem;
       }
       ol li::before {
           font-size: 2.5rem;
           width: 3rem;
           left: -3.5rem;
           top: 0.5rem;
       }

    }

    @media only screen and (max-width: 620px) {
        ol {
            font-size: 1rem;
            padding: 0 0 0 3rem;
        }
        ol li::before {
           font-size: 2rem;
           width: 2.5rem;
           left: -3rem;
           top: 0rem;
        }
        li {
            padding: 0.5rem 0 2rem 0;  
        }
    }
</style>