<script>
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	console.log($page.data);
</script>

<!-- Add Page -->

<h1>Add A New Card</h1>

<div class="container">
	<div class="add-card">
		<form
			method="POST"
			action="?/add"
			use:enhance={({ form }) => {
				form.reset();
				console.log('card has been added');
			}}
		>
			<input id="title" name="title" type="text" placeholder="Story Title" />
			<input id="source" name="title" type="text" placeholder="Source" />
			<input id="link" name="link" type="url" placeholder="link" />
			<textarea id="blurb" name="blurb" rows="4" cols="100" placeholder="blurb" />

			<input id="sType" name="sType" type="text" placeholder="True or False" />
			<button class="submit">Submit</button>
		</form>
	</div>
</div>

<style>
	.container {
		width: 80%;
	}
	.add-card {
		display: flex;
		flex-direction: column;
	}

	input {
		width: 100%;
		margin-top: 10px;
	}
	#blurb {
		margin-top: 10px;
	}

	.submit {
		margin-top: 20px;
	}
</style>
