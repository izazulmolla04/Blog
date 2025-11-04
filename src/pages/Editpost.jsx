import React, { useState, useEffect } from "react";
import { Container, Postform } from "../components";
import appwriteService from "../appwrite/config";
import { useParams, useNavigate } from "react-router-dom";

function Editpost() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((postData) => {
        if (postData) setPost(postData);
        else navigate("/"); 
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return post ? (
    <div className="p-4">
      <Container>
        <Postform post={post} />
      </Container>
    </div>
  ) : null;
}

export default Editpost;
