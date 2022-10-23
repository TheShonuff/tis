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
			<input id="source" name="source" type="text" placeholder="Source" />
			<input id="link" name="link" type="url" placeholder="link" />
			<select name="category" id="category">
				<option value="politics">Politics</option>
				<option value="entertainment">Entertainment</option>
				<option value="current-events">Current Events</option>
				<option value="sports">Sports</option>
				<option value="education">Education</option>
			</select>
			<textarea id="blurb" name="blurb" rows="4" cols="100" placeholder="blurb" />
			<textarea id="facts" name="facts" rows="4" cols="100" placeholder="Facts" />
			<label for="truth-select" />
			<select name="truth" id="truth">
				<option value="True">True</option>
				<option value="False">False</option>
			</select>
			<input id="flink1" name="flink1" type="url" placeholder="fact link 1" />
			<input id="flink2" name="flink2" type="url" placeholder="fact link 2" />
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
