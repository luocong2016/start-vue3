<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Setting",
  
  setup() {
    const store = useStore();
    
    return () => (
      <div>
        <h1>This is a setting page</h1>
        <p>store count is: { store.state.count }</p>
      </div>
    );
  }
});
</script>
