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

    ol li::marker {
        color: var(--on-orange);
        font-size: 3rem;
        opacity: 0;
        font-weight: 700;
        content: counter(customlistcounter) "  ";
    }
    li {
        counter-increment: customlistcounter;
        padding: 1rem 0 3rem 0;
        border-top: 1px solid var(--gray-light);
    }

    .spacing {
        position: relative;
        top: -1.3rem;
    }

    .hed {
        font-family: var(--serif);
        font-weight: 700;
    }

    @media only screen and (max-width: 800px) {
       ol {
           padding: 0 1rem 0 4rem;
       }
       ol li::marker {
           font-size: 2.5rem;
       }
       .spacing {
           top: -1rem; 
       }
    }

    @media only screen and (max-width: 620px) {
        ol {
            font-size: 1rem;
            padding: 0 0 0 3.25rem;
        }
        ol li::marker {
           font-size: 2rem;
        }
        li {
            padding: 0.5rem 0 2rem 0;  
        }
        .spacing {
            top: -0.75rem; 
        }
    }
</style>