<script>
	import { page } from '$app/stores';
    let  num = 0;
	console.log($page.data);
    function nextCard(){
        num++
        console.log("Button clicked")
    }
    // create function to vote true and update the DB

    // create function to vote false and update the DB

    // functions need to update local storage to print results at end

</script>

<h1>The Internet Said...</h1>
<div class="container">
    <div class="card">
    <h3>{$page.data.cards[num].title}</h3>
        <p>{$page.data.cards[num].blurb}</p>
        <form>
            <div class="vote">
                <button on:click={nextCard}>True</button>
                <button on:click={nextCard}>False</button>
            </div>
        </form>
    </div>
</div>

<style>
.container {
    display: flex;
    height: 100%;
    width: 100%;
}

.card {
    height: 800px;
    width: 500px;
    margin: 0 auto;
}
</style>
