<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        {{ $t("translation.homepage") }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        metaInfo() {
            return {
                title: this.$t('translation.homepage'),
            };
        },
    };
</script>
