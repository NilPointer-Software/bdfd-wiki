# Flowchart Changelog

<style>
.changelog {
    background: var(--card-bg);
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 2px;
    border-radius: 10px;
    border-top: 2px solid var(--card-bg);
    position: relative;
}

.changePrev {
    margin-top: 10px;
    border: solid;
    border-width: 2px;
    border-color: var(--link-collr);
    border-radius: 10px;
    height: 10rem;
    display: flex; 
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: .3s;
}

.changelog:hover > .changePrev {
    border-color: var(--hover-bg);
    border-radius: 15px;
    transition: .3s;
}

.changePrev h2 {
    font-size: 200%;
}

.changePrev p {
    margin-top: -20px;
    margin-bottom: 85px;
}

.changelog:hover > .changePrev > #newUpdate {
    background-color: var(--hover-bg);
    border-radius: 12px;
    transform: scale(1.05);
    transition: .3s;
}

#newUpdate {
    user-select: none;
    -webkit-user-select: none;
    position: absolute;
    top: 20px;
    left: 20px;
    background-color: var(--link-color);
    color: #e1e1e1;
    padding: 5px 10px;
    border-radius: 10px;
    transition: .3s;
}

#newUpdate:before {
    content: '🔥';
    filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.3));
}
</style>

<div class="changelog">
  <div class="changePrev" id="year">
    <h2>2024</h2>
    <p>What new has been added?</p>
  </div>
</div>

<div class="changelog">
  <div class="changePrev">
    <h2>August</h2>
    <p>Let's start from scratch now</p>
    <span id="newUpdate">NEW</span>
  </div>
  <ul>
    <li>Flowchart bot type was added to Bot Designer For Discord.</li>
    <li>Added <code class="hljs">Entry point</code></li>
    <li>Added <code class="hljs">Add numbers</code></li>
    <li>Added <code class="hljs">Add response embed</code></li>
    <li>Added <code class="hljs">Add</code></li>
    <li>Added <code class="hljs">Ban</code></li>
    <li>Added <code class="hljs">Ceil number</code></li>
    <li>Added <code class="hljs">Create Boolean</code></li>
    <li>Added <code class="hljs">Create number</code></li>
    <li>Added <code class="hljs">Create snowflake</code></li>
    <li>Added <code class="hljs">Create text</code></li>
    <li>Added <code class="hljs">Current Date</code></li>
    <li>Added <code class="hljs">Delete global storage</code></li>
    <li>Added <code class="hljs">Divide numbers</code></li>
    <li>Added <code class="hljs">Equals</code></li>
    <li>Added <code class="hljs">Floor number</code></li>
    <li>Added <code class="hljs">Format date</code></li>
    <li>Added <code class="hljs">Format text</code></li>
    <li>Added <code class="hljs">Format text with multiple arguments</code></li>
    <li>Added <code class="hljs">Generate random Boolean</code></li>
    <li>Added <code class="hljs">Generate random number</code></li>
    <li>Added <code class="hljs">Generate random text</code></li>
    <li>Added <code class="hljs">Get command arg</code></li>
    <li>Added <code class="hljs">Get author</code></li>
    <li>Added <code class="hljs">Get channel ID</code></li>
    <li>Added <code class="hljs">Get gloval value</code></li>
    <li>Added <code class="hljs">Get guild ID</code></li>
    <li>Added <code class="hljs">Global storage contains key</code></li>
    <li>Added <code class="hljs">Greater</code></li>
    <li>Added <code class="hljs">Greater or equal</code></li>
    <li>Added <code class="hljs">If</code></li>
    <li>Added <code class="hljs">Is number</code></li>
    <li>Added <code class="hljs">Less</code></li>
    <li>Added <code class="hljs">Less or equal</code></li>
    <li>Added <code class="hljs">Multiply numbers</code></li>
    <li>Added <code class="hljs">Not</code></li>
    <li>Added <code class="hljs">Open direct message channel</code></li>
    <li>Added <code class="hljs">Or</code></li>
    <li>Added <code class="hljs">Parse number</code></li>
    <li>Added <code class="hljs">Parse timestamp</code></li>
    <li>Added <code class="hljs">Replace in text</code></li>
    <li>Added <code class="hljs">Round number</code></li>
    <li>Added <code class="hljs">Send message</code></li>
    <li>Added <code class="hljs">Set global data</code></li>
    <li>Added <code class="hljs">Set response message</code></li>
    <li>Added <code class="hljs">Subtract numbers</code></li>
    <li>Added <code class="hljs">To lowercase</code></li>
    <li>Added <code class="hljs">To text</code></li>
    <li>Added <code class="hljs">To uppercase</code></li>
  </ul>
</div>

```admonish abstract title="BDScript Changelog"
If you want to see the BDScript changelog, [click here](./CHANGELOG.md).
```
