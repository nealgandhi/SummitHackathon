import React from "react";

export default function Footer() {
  return (
    <div>
      <footer class="flex-column text-center justify-center bg-paleCerulean text-white p-4 mt-auto">
        <p>made with love &#10084; by team DNE </p>
        <p>
          created for the{" "}
          <a
            href="https://github.com/nealgandhi/SummitHackathon"
            class="hover:underline"
          >
            Capital One Summit Hackathon
          </a>
        </p>
      </footer>
    </div>
  );
}
