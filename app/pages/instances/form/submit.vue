<template>
    <main>
        <form name="form">
            <!-- inputs and stuff -->
            <input type="submit" onclick="javascript: form.action='/submit';">
            <input type="submit" onclick="javascript: form.action='/submit-2';">
        </form>

        <form action="/submit">
            <input type="submit" value="Submit">
            <input type="submit" value="Go Elsewhere" formaction="/elsewhere">
        </form>
    </main>
</template>

<script>
    export default {
        methods: {},
        mounted() {}
    }
</script>
